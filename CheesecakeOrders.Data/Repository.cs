using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrders.Data
{
    public class Repository
    {
        private string _connectionString;
        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Order> GetAll()
        {
            using var context = new OrdersDbContext(_connectionString);
            return context.Orders.ToList();
        }
        public void AddOrder(Order o)
        {
            using var context = new OrdersDbContext(_connectionString);
            context.Orders.Add(o);
            context.SaveChanges();
        }
        public Order GetOrderById(int id)
        {
            using var context = new OrdersDbContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }
    }
}
