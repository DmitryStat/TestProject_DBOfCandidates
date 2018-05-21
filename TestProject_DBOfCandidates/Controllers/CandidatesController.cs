using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TestProject_DBOfCandidates.Models;

namespace TestProject_DBOfCandidates.Controllers
{
    [Route("api/candidates")]
    public class CandidatesController : Controller
    {
        ApplicationContext db;

        byte[] file;

        public CandidatesController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Candidate> Get()
        {
            return db.Candidates.ToList();
        }

        [HttpGet("{id}")]
        public Candidate Get(int id)
        {
            Candidate candidate = db.Candidates.FirstOrDefault(x => x.Id == id);
            
            return candidate;
        }

        [HttpPost]
        [Authorize(Roles = "manager")]
        public IActionResult Post([FromBody] Candidate candidate)
        {
            if (ModelState.IsValid)
            {
                candidate.Date = GetDate();
                candidate.TextFile = file;
                db.Update(candidate);
                db.SaveChanges();
                return Ok(candidate);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "manager")]
        public IActionResult Put(int id, [FromBody]Candidate candidate)
        {
            if (ModelState.IsValid)
            {
                candidate.Date = GetDate();
                candidate.TextFile = file;
                db.Update(candidate);
                db.SaveChanges();
                return Ok(candidate);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "manager")]
        public IActionResult Delete(int id)
        {
            Candidate candidate = db.Candidates.FirstOrDefault(x => x.Id == id);

            if (candidate != null)
            {
                db.Candidates.Remove(candidate);
                db.SaveChanges();
            }

            return Ok(candidate);
        }

        private string GetDate()
        {
            return DateTime.Now.Day + "." + DateTime.Now.Month + "." + DateTime.Now.Year;
        }
        
    }
}
