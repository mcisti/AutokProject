using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace autoprojekt.Models;

public partial class AutopiacContext : DbContext
{
    public AutopiacContext()
    {
    }

    public AutopiacContext(DbContextOptions<AutopiacContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Aspnetrole> Aspnetroles { get; set; }

    public virtual DbSet<Aspnetroleclaim> Aspnetroleclaims { get; set; }

    public virtual DbSet<Aspnetuser> Aspnetusers { get; set; }

    public virtual DbSet<Aspnetuserclaim> Aspnetuserclaims { get; set; }

    public virtual DbSet<Aspnetuserlogin> Aspnetuserlogins { get; set; }

    public virtual DbSet<Aspnetusertoken> Aspnetusertokens { get; set; }

    public virtual DbSet<Efmigrationshistory> Efmigrationshistories { get; set; }

    public virtual DbSet<Jarmuvek> Jarmuveks { get; set; }

    public virtual DbSet<KepekVideo> KepekVideos { get; set; }

    public virtual DbSet<TortenetiAdatok> TortenetiAdatoks { get; set; }

    public virtual DbSet<Velemenyek> Velemenyeks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;database=autopiac;user=root;password=;sslmode=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Aspnetrole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("aspnetroles");

            entity.HasIndex(e => e.NormalizedName, "RoleNameIndex").IsUnique();

            entity.Property(e => e.ConcurrencyStamp).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Name)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.NormalizedName)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
        });

        modelBuilder.Entity<Aspnetroleclaim>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("aspnetroleclaims");

            entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.ClaimType).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.ClaimValue).HasDefaultValueSql("'NULL'");

            entity.HasOne(d => d.Role).WithMany(p => p.Aspnetroleclaims)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_AspNetRoleClaims_AspNetRoles_RoleId");
        });

        modelBuilder.Entity<Aspnetuser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("aspnetusers");

            entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

            entity.HasIndex(e => e.Id, "Id");

            entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex").IsUnique();

            entity.Property(e => e.AccessFailedCount).HasColumnType("int(11)");
            entity.Property(e => e.BirthDate).HasMaxLength(6);
            entity.Property(e => e.ConcurrencyStamp).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Fullname).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.LockoutEnd)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("datetime");
            entity.Property(e => e.NormalizedEmail)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.NormalizedUserName)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.PasswordHash).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.PhoneNumber).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.SecurityStamp).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.UserName)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");

            entity.HasMany(d => d.Roles).WithMany(p => p.Users)
                .UsingEntity<Dictionary<string, object>>(
                    "Aspnetuserrole",
                    r => r.HasOne<Aspnetrole>().WithMany()
                        .HasForeignKey("RoleId")
                        .HasConstraintName("FK_AspNetUserRoles_AspNetRoles_RoleId"),
                    l => l.HasOne<Aspnetuser>().WithMany()
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_AspNetUserRoles_AspNetUsers_UserId"),
                    j =>
                    {
                        j.HasKey("UserId", "RoleId").HasName("PRIMARY");
                        j.ToTable("aspnetuserroles");
                        j.HasIndex(new[] { "RoleId" }, "IX_AspNetUserRoles_RoleId");
                    });
        });

        modelBuilder.Entity<Aspnetuserclaim>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("aspnetuserclaims");

            entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.ClaimType).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.ClaimValue).HasDefaultValueSql("'NULL'");

            entity.HasOne(d => d.User).WithMany(p => p.Aspnetuserclaims)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_AspNetUserClaims_AspNetUsers_UserId");
        });

        modelBuilder.Entity<Aspnetuserlogin>(entity =>
        {
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey }).HasName("PRIMARY");

            entity.ToTable("aspnetuserlogins");

            entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

            entity.Property(e => e.ProviderDisplayName).HasDefaultValueSql("'NULL'");

            entity.HasOne(d => d.User).WithMany(p => p.Aspnetuserlogins)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_AspNetUserLogins_AspNetUsers_UserId");
        });

        modelBuilder.Entity<Aspnetusertoken>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name }).HasName("PRIMARY");

            entity.ToTable("aspnetusertokens");

            entity.Property(e => e.Value).HasDefaultValueSql("'NULL'");

            entity.HasOne(d => d.User).WithMany(p => p.Aspnetusertokens)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_AspNetUserTokens_AspNetUsers_UserId");
        });

        modelBuilder.Entity<Efmigrationshistory>(entity =>
        {
            entity.HasKey(e => e.MigrationId).HasName("PRIMARY");

            entity.ToTable("__efmigrationshistory");

            entity.Property(e => e.MigrationId).HasMaxLength(150);
            entity.Property(e => e.ProductVersion).HasMaxLength(32);
        });

        modelBuilder.Entity<Jarmuvek>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("jarmuvek");

            entity.HasIndex(e => e.Hirdeto, "hirdeto");

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
            entity.Property(e => e.Hirdeto).HasColumnName("hirdeto");
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

        modelBuilder.Entity<TortenetiAdatok>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("torteneti_adatok");

            entity.HasIndex(e => e.BejegyzesTipus, "bejegyzes_tipus");

            entity.HasIndex(e => e.JarmuId, "jarmu_id");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.BejegyzesTipus)
                .HasMaxLength(64)
                .HasColumnName("bejegyzes_tipus");
            entity.Property(e => e.JarmuId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("jarmu_id");
            entity.Property(e => e.Leiras)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("leiras");

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
