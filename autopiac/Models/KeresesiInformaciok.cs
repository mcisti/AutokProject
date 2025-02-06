using System;
using System.Collections.Generic;

namespace autopiac.Models;

public partial class KeresesiInformaciok
{
    public int Id { get; set; }

    public int? JarmuId { get; set; }

    public string? KeresettFeltetel { get; set; }

    public virtual Jarmuvek? Jarmu { get; set; }
}
