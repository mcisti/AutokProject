using autoprojekt.Models;
using autoprojekt.Models.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace autoprojekt.Controllers
{
    [Route("api/Felhasznalo")]
    [ApiController]
    public class FelhasznaloController : ControllerBase
    {
        private readonly AutopiacContext _context;

        public FelhasznaloController(AutopiacContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var fehasznalo = await _context.Aspnetusers.Select(u=> new { u.Id, u.UserName, u.Email, u.PhoneNumber, u.BirthDate }).ToListAsync();
            if (fehasznalo != null)
            {
                return Ok(fehasznalo);
            }
            return BadRequest();
        }


        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            using var db = new AutopiacContext();
            var fehasznaloid = db.Aspnetusers.Select(u => new {id= u.Id, u.UserName, u.Email, u.PhoneNumber, u.BirthDate }).FirstOrDefault(u=>u.id== id);
            if (fehasznaloid == null)
            {
                return NotFound();
            }
            return Ok(fehasznaloid);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteById(string id)
        {
            var felhasznalotorles = await _context.Aspnetusers.FirstOrDefaultAsync(felhasznalotorles => felhasznalotorles.Id == id);
            if (felhasznalotorles != null)
            {
                _context.Aspnetusers.Remove(felhasznalotorles);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Sikeres felhasználó törlés" });
            }
            return NotFound(new { Message = "Nem található ilyen felhasználó!" });
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(string id, EditUserDto editUserDto)
        {
            var felhasznalo = _context.Aspnetusers.FirstOrDefault(u => u.Id == id);
            if (id != felhasznalo.Id)
            {
                return BadRequest();
            }
            felhasznalo.UserName = editUserDto.UserName;
            felhasznalo.Email = editUserDto.Email;
            felhasznalo.PhoneNumber = editUserDto.PhoneNumber;
            felhasznalo.BirthDate = editUserDto.BirthDate;

             _context.Update(felhasznalo);

            await _context.SaveChangesAsync();
            return Ok(new { Message = "Sikeres változtatás" });
        }

    }
}
