package com.xmeme.models;

import lombok.*;

import javax.persistence.*;

//Model class for entity : Meme
//JPA will create the specified meme_table if it doesn't exist, else it will update the attributes corresponding to column names.


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
@Table(name="memes_table")
@ToString
public class Meme{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String name;

    @Column
    private String caption;

    @Column
    private String url;

}
