using Database;
using Microsoft.EntityFrameworkCore;
using Repository.Services;
using Repository.Unit;

var builder = WebApplication.CreateBuilder(args);

var policyCors = "policy";

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

//builder.Services.AddAutoMapper(typeof(Program));

//        add services in container for register for dependincy injection

//     register database

builder.Services.AddDbContext<CompanyDbContext>(options => 
                options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection")));


//    register Unit Of Work 

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<EmployeeService>();
builder.Services.AddScoped<DepartmentService>();


// cors Setting for consumer

builder.Services.AddCors(setupAction =>
{
    setupAction.AddPolicy(policyCors, policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});







var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseCors(policyCors);

app.UseAuthorization();

app.MapControllers();

app.Run();
