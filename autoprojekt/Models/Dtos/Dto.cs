namespace autoprojekt.Models.Dtos
{
    public record CreateUserDto(string UserName, string Email, string Password, DateTime BirthDate, string PhoneNumber);

    public record LoginIUserDto(string UserName, string Password);

    public record AssignUserDto(string Email, string RoleName);
    public record AddNewJarmu(int Id, string Hirdeto, string Marka, string Tipus, int Evjarat, int Kilometer, string Szin, string MotorTipus, decimal MotorMeret, int Teljesitmeny, string Sebessegvalto, decimal Ar, string Allapot, string Felszereltseg, DateTime MuszakiVizsga, string Elojel);
    public record AddNewKep(int Id, int JarmuId, string Tipus, string EleresiUt);
    public record EditUserDto(string UserName, string Email, string PhoneNumber, DateTime BirthDate);
}
