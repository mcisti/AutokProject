using autoprojekt.Models;

namespace autoprojekt.Services.IAuthService
{
    public interface ITokenGenerator
    {
        string GenerateToken(ApplicationUser applicationUser, IEnumerable<string> role);
    }
}
