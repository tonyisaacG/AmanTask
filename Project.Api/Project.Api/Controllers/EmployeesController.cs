using Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository.Services;
using Repository.Unit;
using ViewModels.VModels;

namespace Project.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService _employeeService;
        public EmployeesController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var employees = _employeeService.GetAll();
            return Ok(employees);
        }

        [HttpPost("Add")]
        public IActionResult Add(EmployeeVM employee)
        {
            if (ModelState.IsValid)
            {
                var res = _employeeService.Add(employee);
                if (res == null)
                    return BadRequest();
                if (res == true)
                    return Ok();
                else
                    return BadRequest();
            }
            else { return BadRequest(); }
        }

        [HttpGet("GetOne/{id:int}")]
        public IActionResult GetOne(int id)
        {
            var res = _employeeService.GetOne(id);
            if (res == null)
                return NotFound();

            return Ok(res);
            
        }

        [HttpPost("Delete")]
        public IActionResult Delete(EmployeeVM entity)
        {
            var res = _employeeService.Delete(entity);
            if (res == null)
                return BadRequest();
            if (res == false)
                return NotFound();
            return Ok();
        }

        [HttpPost("Update")]
        public IActionResult Update(EmployeeVM entity)
        {
            if (ModelState.IsValid)
            {
                var res = _employeeService.Update(entity);
                if (res == null)
                    return BadRequest();
                if (res == false)
                    return NotFound();
                return Ok();
            }
            else { return BadRequest(); }

        }
    }
}
