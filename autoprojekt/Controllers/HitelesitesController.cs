using autoprojekt.Models.Dtos;
using autoprojekt.Services.IAuthService;
using Microsoft.AspNetCore.Mvc;

namespace autoprojekt.Controllers
{
    [Route("api")]
    [ApiController]
    public class HitelesitesController : ControllerBase
    {
        private readonly IAuth auth;

        public HitelesitesController(IAuth auth)
        {
            this.auth = auth;
        }

        [HttpPost("Regisztracio")]
        public async Task<ActionResult> AddNewUser(CreateUserDto createUserDto)
        {
            var res = await auth.Register(createUserDto);

            if (res != null)
            {
                return StatusCode(201, res);
            }

            return BadRequest(res);

        }

        [HttpPost("Bejelentkezes")]
        public async Task<ActionResult> LoginUser(LoginIUserDto loginIUserDto)
        {
            var res = await auth.Login(loginIUserDto);

            if (res != null)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpPost("Jogosultsag")]
        public async Task<ActionResult> AssignRole(AssignUserDto assignUserDto)
        {
            var res = await auth.AssignRole(assignUserDto.Email, assignUserDto.RoleName);

            if (res != null)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }
    }
}
