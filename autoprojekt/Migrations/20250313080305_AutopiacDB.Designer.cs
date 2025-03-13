﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using autoprojekt.Models;

#nullable disable

namespace autoprojekt.Migrations
{
    [DbContext(typeof(AutopiacContext))]
    [Migration("20250313080305_AutopiacDB")]
    partial class AutopiacDB
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ClaimType")
                        .HasColumnType("longtext");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("longtext");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ClaimType")
                        .HasColumnType("longtext");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("longtext");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("longtext");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("RoleId")
                        .HasColumnType("varchar(255)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Value")
                        .HasColumnType("longtext");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("varchar(255)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("longtext");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Fullname")
                        .HasColumnType("longtext");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("tinyint(1)");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetime");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("longtext");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("longtext");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.Felhasznalo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id");

                    b.Property<DateTime>("Datum")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasColumnName("datum")
                        .HasDefaultValueSql("'current_timestamp()'");

                    b.Property<string>("Email")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("email")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Hash")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("varchar(64)")
                        .HasColumnName("HASH");

                    b.Property<int>("Jogosultsag")
                        .HasColumnType("int(1)")
                        .HasColumnName("jogosultsag");

                    b.Property<string>("KapcsolattartoNev")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("kapcsolattarto_nev")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Salt")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("varchar(64)")
                        .HasColumnName("SALT");

                    b.Property<string>("Telefon")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("telefon")
                        .HasDefaultValueSql("'NULL'");

                    b.HasKey("Id")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "Email" }, "email")
                        .IsUnique();

                    b.ToTable("felhasznalo", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.Jarmuvek", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id");

                    b.Property<string>("Allapot")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("text")
                        .HasColumnName("allapot")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<decimal?>("Ar")
                        .ValueGeneratedOnAdd()
                        .HasPrecision(10)
                        .HasColumnType("decimal(10,2)")
                        .HasColumnName("ar")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Elojel")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("elojel")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<int?>("Evjarat")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("evjarat")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Felszereltseg")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("text")
                        .HasColumnName("felszereltseg")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<int>("Hirdeto")
                        .HasColumnType("int(11)")
                        .HasColumnName("hirdeto");

                    b.Property<int?>("Kilometer")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("kilometer")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Marka")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("marka")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<decimal?>("MotorMeret")
                        .ValueGeneratedOnAdd()
                        .HasPrecision(4)
                        .HasColumnType("decimal(4,2)")
                        .HasColumnName("motor_meret")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("MotorTipus")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("motor_tipus")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<DateTime?>("MuszakiVizsga")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("date")
                        .HasColumnName("muszaki_vizsga")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Sebessegvalto")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("sebessegvalto")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Szin")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("szin")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<int?>("Teljesitmeny")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("teljesitmeny")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Tipus")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("tipus")
                        .HasDefaultValueSql("'NULL'");

                    b.HasKey("Id")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "Hirdeto" }, "hirdeto");

                    b.ToTable("jarmuvek", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.KepekVideo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id");

                    b.Property<string>("EleresiUt")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(255)
                        .HasColumnType("varchar(255)")
                        .HasColumnName("eleresi_ut")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<int?>("JarmuId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("jarmu_id")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Tipus")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("enum('kep','video')")
                        .HasColumnName("tipus")
                        .HasDefaultValueSql("'NULL'");

                    b.HasKey("Id")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "JarmuId" }, "jarmu_id");

                    b.ToTable("kepek_video", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.TortenetiAdatok", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id");

                    b.Property<string>("BejegyzesTipus")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("varchar(64)")
                        .HasColumnName("bejegyzes_tipus");

                    b.Property<int?>("JarmuId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("jarmu_id")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Leiras")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("text")
                        .HasColumnName("leiras")
                        .HasDefaultValueSql("'NULL'");

                    b.HasKey("Id")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "BejegyzesTipus" }, "bejegyzes_tipus");

                    b.HasIndex(new[] { "JarmuId" }, "jarmu_id")
                        .HasDatabaseName("jarmu_id1");

                    b.ToTable("torteneti_adatok", (string)null);
                });

            modelBuilder.Entity("autoprojekt.Models.Velemenyek", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id");

                    b.Property<DateTime>("Datum")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasColumnName("datum")
                        .HasDefaultValueSql("'current_timestamp()'");

                    b.Property<int?>("Ertekeles")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("ertekeles")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<int?>("JarmuId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("jarmu_id")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("VasarloNev")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("vasarlo_nev")
                        .HasDefaultValueSql("'NULL'");

                    b.Property<string>("Velemeny")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("text")
                        .HasColumnName("velemeny")
                        .HasDefaultValueSql("'NULL'");

                    b.HasKey("Id")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "JarmuId" }, "jarmu_id")
                        .HasDatabaseName("jarmu_id2");

                    b.ToTable("velemenyek", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("autoprojekt.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("autoprojekt.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("autoprojekt.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("autoprojekt.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("autoprojekt.Models.KepekVideo", b =>
                {
                    b.HasOne("autoprojekt.Models.Jarmuvek", "Jarmu")
                        .WithMany("KepekVideos")
                        .HasForeignKey("JarmuId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .HasConstraintName("kepek_video_ibfk_1");

                    b.Navigation("Jarmu");
                });

            modelBuilder.Entity("autoprojekt.Models.TortenetiAdatok", b =>
                {
                    b.HasOne("autoprojekt.Models.Jarmuvek", "Jarmu")
                        .WithMany("TortenetiAdatoks")
                        .HasForeignKey("JarmuId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .HasConstraintName("torteneti_adatok_ibfk_1");

                    b.Navigation("Jarmu");
                });

            modelBuilder.Entity("autoprojekt.Models.Velemenyek", b =>
                {
                    b.HasOne("autoprojekt.Models.Jarmuvek", "Jarmu")
                        .WithMany("Velemenyeks")
                        .HasForeignKey("JarmuId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .HasConstraintName("velemenyek_ibfk_1");

                    b.Navigation("Jarmu");
                });

            modelBuilder.Entity("autoprojekt.Models.Jarmuvek", b =>
                {
                    b.Navigation("KepekVideos");

                    b.Navigation("TortenetiAdatoks");

                    b.Navigation("Velemenyeks");
                });
#pragma warning restore 612, 618
        }
    }
}
