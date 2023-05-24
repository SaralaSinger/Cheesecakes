using CheesecakeOrders.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeOrders.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private string _connectionString;
        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("GetAll")]
        public List<Order> GetAll()
        {
            var repo = new Repository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("AddOrder")]
        public void AddOrder(Order o)
        {
            var repo = new Repository(_connectionString);
            repo.AddOrder(o);
        }
        [HttpPost]
        [Route("GetOrderById")]
        public Order GetOrderById(Order o)
        {
            var repo = new Repository(_connectionString);
            return repo.GetOrderById(o.Id);
        }
    }
}
