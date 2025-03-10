using AutoProject.Models;
using autoprojekt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutoProject.Controllers
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


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            using var db = new AutopiacContext();
            var jarmuvekid = db.Jarmuveks.Find(id);
            if (jarmuvekid == null)
            {
                return NotFound();
            }
            return Ok(jarmuvekid);
        }


        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] AddNewJarmu addNewJarmu)
        {
            var newJarmu = new Jarmuvek
            {
                Id = addNewJarmu.Id,
                Hirdeto = addNewJarmu.Hirdeto,
                Marka = addNewJarmu.Marka,
                Tipus = addNewJarmu.Tipus,
                Evjarat = addNewJarmu.Evjarat,
                Kilometer = addNewJarmu.Kilometer,
                Szin = addNewJarmu.Szin,
                MotorTipus = addNewJarmu.MotorTipus,
                MotorMeret = addNewJarmu.MotorMeret,
                Teljesitmeny = addNewJarmu.Teljesitmeny,
                Sebessegvalto = addNewJarmu.Sebessegvalto,
                Ar = addNewJarmu.Ar,
                Allapot = addNewJarmu.Allapot,
                Felszereltseg = addNewJarmu.Felszereltseg,
                MuszakiVizsga = addNewJarmu.MuszakiVizsga,
                Elojel = addNewJarmu.Elojel,
            };


            if (newJarmu != null)
            {
                await _context.Jarmuveks.AddAsync(newJarmu);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "A járművet sikeresen feltöltötte!" });
            }
            return NotFound(new { Message = "Az adatok nem felelnek meg!" });

        }

        [HttpDelete]
        public async Task<ActionResult> DeleteById(int id)
        {
            var jarmutorles = await _context.Jarmuveks.FirstOrDefaultAsync(jarmutorles => jarmutorles.Id == id);
            if (jarmutorles != null)
            {
                _context.Jarmuveks.Remove(jarmutorles);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Sikeres jármű tölrés" });
            }
            return NotFound(new { Message = "Nem található ilyen jármű!" });
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCar(int id, Jarmuvek jarmuvek)
        {
            if (id != jarmuvek.Id)
            {
                return BadRequest();
            }
            _context.Entry(jarmuvek).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(new { Message = "Sikeres változtatás" });
        }

    }
}