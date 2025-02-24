using autoprojekt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace Jarmuvek.Controllers
{
    [Route("api/Jarmuvek")]
    [ApiController]
    public class JarmuvekController : ControllerBase
    {
        private readonly AutopiacContext _context;

        public JarmuvekController(AutopiacContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var jarmuvek = await _context.Jarmuveks.ToListAsync();
            if (jarmuvek != null)
            {
                return Ok(jarmuvek);
            }
            return BadRequest();
        }
    }
}
