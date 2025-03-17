using autoprojekt.Models.Dtos;
using autoprojekt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace autoprojekt.Controllers
{
    [Route("api/Kepek")]
    [ApiController]
    public class KepekController : ControllerBase
    {
        private readonly AutopiacContext _context;

        public KepekController(AutopiacContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var kepek = await _context.KepekVideos.ToListAsync();
            if (kepek != null)
            {
                return Ok(kepek);
            }
            return BadRequest();
        }


        [HttpGet("Jarmu/{id}")]
        public IActionResult Get(int id)
        {
            using var db = new AutopiacContext();
            var kepekid = db.KepekVideos.Where(k=>k.JarmuId==id).ToList();
            if (kepekid == null)
            {
                return NotFound();
            }
            return Ok(kepekid);
        }


        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] AddNewKep addNewKep)
        {
            var newKep = new KepekVideo
            {
                Id = addNewKep.Id,
                JarmuId = addNewKep.JarmuId,
                Tipus = addNewKep.Tipus,
                EleresiUt = addNewKep.EleresiUt,
                
            };


            if (newKep != null)
            {
                await _context.KepekVideos.AddAsync(newKep);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "A képet sikeresen feltöltötte!" });
            }
            return NotFound(new { Message = "Az adatok nem felelnek meg!" });

        }

        [HttpDelete]
        public async Task<ActionResult> DeleteById(int id)
        {
            var keptorles = await _context.KepekVideos.FirstOrDefaultAsync(keptorles => keptorles.Id == id);
            if (keptorles != null)
            {
                _context.KepekVideos.Remove(keptorles);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Sikeres kép tölrés" });
            }
            return NotFound(new { Message = "Nem található ilyen kép!" });
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateImage(int id, KepekVideo kepek)
        {
            if (id != kepek.Id)
            {
                return BadRequest();
            }
            _context.Entry(kepek).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(new { Message = "Sikeres változtatás" });
        }

    }
}
