package com.xmeme.repositories;

import com.xmeme.models.Meme;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//Interface to be implemented by the service performing CRUD operations on Database.

@Repository

public interface MemeRepository extends JpaRepository<Meme,Integer> {
    
    
    //Query to get most recently posted 100 memes from database
    @Query(value="select * from memes_table order by id desc limit 100",nativeQuery=true)
    List<Meme> findTop100OrderByIDDesc();

    
    Meme findByUrl(String url);
    Meme findByCaption(String caption);
}
