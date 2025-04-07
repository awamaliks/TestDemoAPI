var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files from wwwroot
app.UseStaticFiles();

// Set up the default route to serve index.html
app.MapGet("/", async context =>
{
    context.Response.Redirect("/index.html");
});

app.Run();
