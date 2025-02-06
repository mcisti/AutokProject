using System;
using System.Collections.Generic;

namespace autopiac.Models;

public partial class TortenetiAdatok
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public int? ElozoTulajdonosok { get; set; }

    public bool? Baleset { get; set; }

    public string? Szerviztortenet { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
