package com.xmeme.controllers;

import com.xmeme.models.Meme;
import com.xmeme.service.MemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Controller class to map requests to corresponding api services

@RestController
@CrossOrigin
public class MemeController {

    @Autowired
    private MemeService memeService;


    //Gets most recent 100 meme objects from database
    @RequestMapping(value="/memes")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity get100Memes(){
        return new ResponseEntity(memeService.get(), HttpStatus.OK);
    }

    
    //Gets meme object corresponding to the id provided as query param.
    @GetMapping("/memes/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity getMemeById(@PathVariable int id){
        return new ResponseEntity(memeService.getMemeById(id),HttpStatus.OK);
    }

    
    //Posts meme object to database
    @PostMapping("/memes")
    @ResponseStatus(HttpStatus.CREATED)
    public  ResponseEntity<Integer  > save(@RequestBody Meme meme){
        return new ResponseEntity<>(memeService.save(meme), HttpStatus.CREATED);
    }

    
    //Updates caption or url or both for the meme object corresponding to the id provided as query param.
    @PatchMapping("/memes/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity updateCaptionOrUrl(@PathVariable int id ,@RequestBody Meme meme){
        if(memeService.getMemeById(id)==null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        memeService.update(id,meme);
        return new ResponseEntity<Meme>(HttpStatus.OK);
    }
}
