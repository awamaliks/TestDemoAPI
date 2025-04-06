using Microsoft.AspNetCore.Mvc;
using TestDemoAPI.Model;

namespace TestDemoAPI.Controllers
{
   
        [Route("api/[controller]")]
        [ApiController]
        public class ProductsController : ControllerBase
        {
            private static readonly List<Product> products = new List<Product>
        {
            new Product { Id = 1, Name = "Product A", Price = 29.99m },
            new Product { Id = 2, Name = "Product B", Price = 19.99m }
        };

            // GET: api/products
            [HttpGet]
            public IActionResult GetProducts()
            {
                return Ok(products);
            }

            // GET: api/products/{id}
            [HttpGet("{id}")]
            public IActionResult GetProduct(int id)
            {
                var product = products.FirstOrDefault(p => p.Id == id);
                if (product == null)
                {
                    return NotFound(); // 404 if product doesn't exist
                }
                return Ok(product);
            }

            // POST: api/products
            [HttpPost]
            public IActionResult CreateProduct([FromBody] Product product)
            {
                if (product == null)
                {
                    return BadRequest("Product cannot be null"); // 400 Bad Request
                }

                product.Id = products.Max(p => p.Id) + 1;
                products.Add(product);

                return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product); // 201 Created
            }

            // PUT: api/products/{id}
            [HttpPut("{id}")]
            public IActionResult UpdateProduct(int id, [FromBody] Product updatedProduct)
            {
                if (updatedProduct == null)
                {
                    return BadRequest("Product data is required"); // 400 Bad Request
                }

                var product = products.FirstOrDefault(p => p.Id == id);
                if (product == null)
                {
                    return NotFound(); // 404 Not Found if product doesn't exist
                }

                // Update the product
                product.Name = updatedProduct.Name;
                product.Price = updatedProduct.Price;

                return Ok(product); // 200 OK with updated product
            }

            // DELETE: api/products/{id}
            [HttpDelete("{id}")]
            public IActionResult DeleteProduct(int id)
            {
                var product = products.FirstOrDefault(p => p.Id == id);
                if (product == null)
                {
                    return NotFound(); // 404 Not Found if product doesn't exist
                }

                products.Remove(product);
                return NoContent(); // 204 No Content on successful deletion
            }
        }
    }

