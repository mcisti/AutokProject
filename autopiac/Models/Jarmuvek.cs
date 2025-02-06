using System;
using System.Collections.Generic;

namespace autopiac.Models;

public partial class Jarmuvek
{
    public int Id { get; set; }

    public string? Marka { get; set; }

    public string? Tipus { get; set; }

    public int? Evjarat { get; set; }

    public int? Kilometer { get; set; }

    public string? Szin { get; set; }

    public string? MotorTipus { get; set; }

    public decimal? MotorMeret { get; set; }

    public int? Teljesitmeny { get; set; }

    public string? Sebessegvalto { get; set; }

    public decimal? Ar { get; set; }

    public string? Allapot { get; set; }

    public string? Felszereltseg { get; set; }

    public DateTime? MuszakiVizsga { get; set; }

    public string? Elojel { get; set; }

    public virtual ICollection<Kapcsolatok> Kapcsolatoks { get; set; } = new List<Kapcsolatok>();

    public virtual ICollection<KepekVideo> KepekVideos { get; set; } = new List<KepekVideo>();

    public virtual ICollection<KeresesiInformaciok> KeresesiInformacioks { get; set; } = new List<KeresesiInformaciok>();

    public virtual ICollection<TortenetiAdatok> TortenetiAdatoks { get; set; } = new List<TortenetiAdatok>();

    public virtual ICollection<Velemenyek> Velemenyeks { get; set; } = new List<Velemenyek>();
}
