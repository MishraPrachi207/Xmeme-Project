package com.xmeme.service;

import com.xmeme.models.Meme;
import com.xmeme.repositories.MemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemeService {

    @Autowired
    private MemeRepository memeRepository;


    public List<Meme> get() {
        return memeRepository.findTop100OrderByIDDesc();
    }


    public Meme getMemeById(int id) {
        return memeRepository.findById(id).orElse(null);
    }

    public int save(Meme meme) {
        return memeRepository.save(meme).getId();

    }

    public Meme getMemeByUrl(String url){
        return memeRepository.findByUrl(url);
    }

    public Meme getMemeByCaption(String caption){
        return memeRepository.findByCaption(caption);
    }

    public void update(int id, Meme meme) {
        if(memeRepository.findById(id).isPresent()) {
            Meme existingMeme = memeRepository.findById(id).get();
                if (meme.getUrl() != null) {
                    existingMeme.setUrl(meme.getUrl());
                }
                if (meme.getCaption()!= null) {
                    existingMeme.setCaption(meme.getCaption());
                }
                Meme updatedMeme=memeRepository.save(existingMeme);
        }
    }
}
