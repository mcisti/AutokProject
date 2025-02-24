using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace autoprojekt.Models;

public partial class Jarmuvek
{
    public int Id { get; set; }

    public int Hirdeto { get; set; }

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
    [JsonIgnore]
    public virtual ICollection<KepekVideo> KepekVideos { get; set; } = new List<KepekVideo>();
    [JsonIgnore]
    public virtual ICollection<TortenetiAdatok> TortenetiAdatoks { get; set; } = new List<TortenetiAdatok>();
    [JsonIgnore]
    public virtual ICollection<Velemenyek> Velemenyeks { get; set; } = new List<Velemenyek>();
}
