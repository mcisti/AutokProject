using System;
using System.Collections.Generic;

namespace autoprojekt.Models;

public partial class TortenetiAdatok
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public string BejegyzesTipus { get; set; } = null!;

    public string? Leiras { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
