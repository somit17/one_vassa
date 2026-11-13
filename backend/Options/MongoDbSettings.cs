namespace Backend.Options;

public class MongoDbSettings
{
    public const string SectionName = "MongoDb";

    public string ConnectionString { get; set; } = "mongodb://localhost:27017";

    public string DatabaseName { get; set; } = "onevassa";

    public string PlanEnquiriesCollectionName { get; set; } = "planEnquiries";
}
