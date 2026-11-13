using Backend.Models;
using Backend.Options;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Backend.Services;

public interface IPlanEnquiryRepository
{
    Task<PlanEnquiry> CreateAsync(PlanRequest request, CancellationToken cancellationToken = default);
}

public class PlanEnquiryRepository : IPlanEnquiryRepository
{
    private readonly IMongoCollection<PlanEnquiry> _collection;

    public PlanEnquiryRepository(IMongoDatabase database, IOptions<MongoDbSettings> settings)
    {
        _collection = database.GetCollection<PlanEnquiry>(settings.Value.PlanEnquiriesCollectionName);
    }

    public async Task<PlanEnquiry> CreateAsync(PlanRequest request, CancellationToken cancellationToken = default)
    {
        var enquiry = new PlanEnquiry
        {
            Name = request.Name.Trim(),
            Email = request.Email.Trim(),
            Phone = request.Phone?.Trim(),
            Interest = request.Interest,
            Group = request.Group,
            Season = request.Season,
            Message = request.Message?.Trim(),
            CreatedAtUtc = DateTime.UtcNow
        };

        await _collection.InsertOneAsync(enquiry, cancellationToken: cancellationToken);

        return enquiry;
    }
}
