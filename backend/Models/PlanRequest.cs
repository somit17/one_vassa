using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

/// <summary>
/// Payload submitted by the "Plan an experience" enquiry form.
/// </summary>
public class PlanRequest
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [StringLength(254)]
    public string Email { get; set; } = string.Empty;

    [Phone]
    [StringLength(30)]
    public string? Phone { get; set; }

    [StringLength(100)]
    public string? Interest { get; set; }

    [StringLength(50)]
    public string? Group { get; set; }

    [StringLength(50)]
    public string? Season { get; set; }

    [StringLength(2000)]
    public string? Message { get; set; }
}
