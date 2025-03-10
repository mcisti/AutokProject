using System.Security.Cryptography.X509Certificates;

namespace AutoProject.Models
{
    public record AddNewJarmu(int Id, int Hirdeto, string Marka, string Tipus, int Evjarat, int Kilometer, string Szin, string MotorTipus, decimal MotorMeret, int Teljesitmeny, string Sebessegvalto, decimal Ar, string Allapot, string Felszereltseg, DateTime MuszakiVizsga, string Elojel);
    public record AddNewKep(int Id, int JarmuId, string Tipus, string EleresiUt );
}


