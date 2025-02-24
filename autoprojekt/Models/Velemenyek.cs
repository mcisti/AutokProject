using System;
using System.Collections.Generic;

namespace autoprojekt.Models;

public partial class Velemenyek
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public string? VasarloNev { get; set; }

    public string? Velemeny { get; set; }

    public int? Ertekeles { get; set; }

    public DateTime Datum { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
