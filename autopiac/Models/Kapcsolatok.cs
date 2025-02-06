using System;
using System.Collections.Generic;

namespace autopiac.Models;

public partial class Kapcsolatok
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public string? KapcsolattartoNev { get; set; }

    public string? Email { get; set; }

    public string? Telefon { get; set; }

    public string? Uzenet { get; set; }

    public DateTime Datum { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
