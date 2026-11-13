using Backend.Models;
using Backend.Options;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Backend.Services;

/// <summary>
/// Ensures the "onevassa" database and its collections exist on startup.
/// MongoDB creates databases lazily, so creating the collection is what
/// materialises the database.
/// </summary>
public sealed class MongoDbInitializer : IHostedService
{
    private readonly IMongoDatabase _database;
    private readonly MongoDbSettings _settings;
    private readonly ILogger<MongoDbInitializer> _logger;

    public MongoDbInitializer(
        IMongoDatabase database,
        IOptions<MongoDbSettings> settings,
        ILogger<MongoDbInitializer> logger)
    {
        _database = database;
        _settings = settings.Value;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        var collectionNames = await (await _database.ListCollectionNamesAsync(cancellationToken: cancellationToken))
            .ToListAsync(cancellationToken);

        if (!collectionNames.Contains(_settings.PlanEnquiriesCollectionName))
        {
            await _database.CreateCollectionAsync(_settings.PlanEnquiriesCollectionName, cancellationToken: cancellationToken);
            _logger.LogInformation(
                "Created MongoDB collection {Collection} in database {Database}",
                _settings.PlanEnquiriesCollectionName,
                _settings.DatabaseName);
        }

        var collection = _database.GetCollection<PlanEnquiry>(_settings.PlanEnquiriesCollectionName);
        var index = new CreateIndexModel<PlanEnquiry>(
            Builders<PlanEnquiry>.IndexKeys.Descending(enquiry => enquiry.CreatedAtUtc));

        await collection.Indexes.CreateOneAsync(index, cancellationToken: cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}
