using autopiac.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace autopiac.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly AutopiacContext _context;

        public CarsController(AutopiacContext context)
        {
            _context = context;
        }


        [HttpGet("Feladat 10.")]
        public async Task<ActionResult<Jarmuvek>> Get()
        {
            var autok = await _context.Jarmuveks.ToListAsync();
            if (autok != null)
            {
                return Ok(autok);
            }

            return BadRequest();



        }
    }
}
