using System;
using System.Collections.Generic;

namespace autoprojekt.Models;

public partial class KepekVideo
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public string? Tipus { get; set; }

    public string? EleresiUt { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
