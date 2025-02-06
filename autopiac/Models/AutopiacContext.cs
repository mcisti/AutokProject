using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace autopiac.Models;

public partial class AutopiacContext : DbContext
{
    public AutopiacContext()
    {
    }

    public AutopiacContext(DbContextOptions<AutopiacContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Jarmuvek> Jarmuveks { get; set; }

    public virtual DbSet<Kapcsolatok> Kapcsolatoks { get; set; }

    public virtual DbSet<KepekVideo> KepekVideos { get; set; }

    public virtual DbSet<KeresesiInformaciok> KeresesiInformacioks { get; set; }

    public virtual DbSet<TortenetiAdatok> TortenetiAdatoks { get; set; }

    public virtual DbSet<Velemenyek> Velemenyeks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;database=autopiac;user=root;password=;ssl mode=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Jarmuvek>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("jarmuvek");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Allapot)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("allapot");
            entity.Property(e => e.Ar)
                .HasPrecision(10)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("ar");
            entity.Property(e => e.Elojel)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("elojel");
            entity.Property(e => e.Evjarat)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("evjarat");
            entity.Property(e => e.Felszereltseg)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("felszereltseg");
            entity.Property(e => e.Kilometer)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("kilometer");
            entity.Property(e => e.Marka)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("marka");
            entity.Property(e => e.MotorMeret)
                .HasPrecision(4)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("motor_meret");
            entity.Property(e => e.MotorTipus)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("motor_tipus");
            entity.Property(e => e.MuszakiVizsga)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("date")
                .HasColumnName("muszaki_vizsga");
            entity.Property(e => e.Sebessegvalto)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("sebessegvalto");
            entity.Property(e => e.Szin)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("szin");
            entity.Property(e => e.Teljesitmeny)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("teljesitmeny");
            entity.Property(e => e.Tipus)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("tipus");
        });

        modelBuilder.Entity<Kapcsolatok>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("kapcsolatok");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Datum)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp")
                .HasColumnName("datum");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("email");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.KapcsolattartoNev)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("kapcsolattarto_nev");
            entity.Property(e => e.Telefon)
                .HasMaxLength(20)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("telefon");
            entity.Property(e => e.Uzenet)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("uzenet");

            entity.HasOne(d => d.Jarmu).WithMany(p => p.Kapcsolatoks)
                .HasForeignKey(d => d.JarmuId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("kapcsolatok_ibfk_1");
        });

        modelBuilder.Entity<KepekVideo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("kepek_video");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.EleresiUt)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("eleresi_ut");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.Tipus)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("enum('kep','video')")
                .HasColumnName("tipus");

            entity.HasOne(d => d.Jarmu).WithMany(p => p.KepekVideos)
                .HasForeignKey(d => d.JarmuId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("kepek_video_ibfk_1");
        });

        modelBuilder.Entity<KeresesiInformaciok>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("keresesi_informaciok");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.KeresettFeltetel)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("keresett_feltetel");

            entity.HasOne(d => d.Jarmu).WithMany(p => p.KeresesiInformacioks)
                .HasForeignKey(d => d.JarmuId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("keresesi_informaciok_ibfk_1");
        });

        modelBuilder.Entity<TortenetiAdatok>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("torteneti_adatok");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Baleset)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("baleset");
            entity.Property(e => e.ElozoTulajdonosok)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("elozo_tulajdonosok");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.Szerviztortenet)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("szerviztortenet");

            entity.HasOne(d => d.Jarmu).WithMany(p => p.TortenetiAdatoks)
                .HasForeignKey(d => d.JarmuId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("torteneti_adatok_ibfk_1");
        });

        modelBuilder.Entity<Velemenyek>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("velemenyek");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Datum)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp")
                .HasColumnName("datum");
            entity.Property(e => e.Ertekeles)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("ertekeles");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.VasarloNev)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("vasarlo_nev");
            entity.Property(e => e.Velemeny)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("velemeny");

            entity.HasOne(d => d.Jarmu).WithMany(p => p.Velemenyeks)
                .HasForeignKey(d => d.JarmuId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("velemenyek_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
