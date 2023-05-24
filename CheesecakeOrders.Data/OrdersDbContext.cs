using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;

namespace CheesecakeOrders.Data
{
    public class OrdersDbContext : DbContext
    {
        private string _connectionString;

        public OrdersDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Order> Orders { get; set; }

    }
}