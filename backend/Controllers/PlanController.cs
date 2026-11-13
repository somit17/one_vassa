using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlanController : ControllerBase
{
    private readonly IPlanEnquiryRepository _repository;
    private readonly ILogger<PlanController> _logger;

    public PlanController(IPlanEnquiryRepository repository, ILogger<PlanController> logger)
    {
        _repository = repository;
        _logger = logger;
    }

    /// <summary>
    /// Receives a "Plan an experience" enquiry and stores it in MongoDB.
    /// </summary>
    [HttpPost]
    [ProducesResponseType(typeof(PlanResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<PlanResponse>> Create(
        [FromBody] PlanRequest request,
        CancellationToken cancellationToken)
    {
        var enquiry = await _repository.CreateAsync(request, cancellationToken);

        _logger.LogInformation(
            "Saved plan enquiry {EnquiryId} from {Name} <{Email}>",
            enquiry.Id,
            enquiry.Name,
            enquiry.Email);

        return Ok(new PlanResponse(enquiry.Id!, "Enquiry received.", request));
    }
}

public sealed record PlanResponse(string Id, string Message, PlanRequest Data);
