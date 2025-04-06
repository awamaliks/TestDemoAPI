using DemoAJaxApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoAJaxApp.Controllers
{
    public class UserController : Controller
    {
        // In-memory data storage (mocking a database)
        private static List<User> users = new List<User>
        {
            new User { Id = 1, Username = "John", Age = 28 },
            new User { Id = 2, Username = "Jane", Age = 24 }
        };

        // Action to display the user list
        public IActionResult Index()
        {
            return View(users);
        }

        // Action to handle GET request to fetch users
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Json(users);
        }

        // Action to handle POST request to add a new user
        [HttpPost]
        public IActionResult AddUser([FromBody] User user)
        {
            if (user != null)
            {
                user.Id = users.Count + 1; // Simple ID generation
                users.Add(user);
                return Json(new { success = true, user });
            }
            return Json(new { success = false });
        }

        // Action to handle PUT request to update a user
        [HttpPut]
        public IActionResult UpdateUser([FromBody] User user)
        {
            var existingUser = users.FirstOrDefault(u => u.Id == user.Id);
            if (existingUser != null)
            {
                // Update the user's details
                existingUser.Username = user.Username;
                existingUser.Age = user.Age;

                // Return success
                return Json(new { success = true, user = existingUser });
            }
            // If user not found, return failure
            return Json(new { success = false });
        }

        // Action to handle DELETE request to remove a user
        [HttpDelete]
        public IActionResult DeleteUser([FromBody] User user)
        {
            var existingUser = users.FirstOrDefault(u => u.Id == user.Id);
            if (existingUser != null)
            {
                // Remove the user from the list
                users.Remove(existingUser);

                // Return success
                return Json(new { success = true });
            }
            // If user not found, return failure
            return Json(new { success = false });
        }
    }
}
