using System;
using System.Collections.Generic;

namespace autoprojekt.Models;

public partial class Felhasznalo
{
    public int Id { get; set; }

    public string? KapcsolattartoNev { get; set; }

    public string? Email { get; set; }

    public string? Telefon { get; set; }

    public DateTime Datum { get; set; }

    public string Salt { get; set; } = null!;

    public string Hash { get; set; } = null!;

    public int Jogosultsag { get; set; }
}
