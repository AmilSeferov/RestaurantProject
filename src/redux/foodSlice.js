import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: false,
  Loading: false,
  data: [
    {
      "name": "SAHiL Bar & Restaurant",
      "imageUrl": "https://sufra.az/wp-content/uploads/2021/04/171288034_2804539306462562_3029183515148400655_n-1.jpg",
      "rating": 4.6,
      "cuisine": "Azərbaycan mətbəxi"
    },
    {
      "name": "Fireworks Urban Kitchen",
      "imageUrl": "https://cdn.frisaga.com/cache/catalog/image/place/content/Restaurant/content/b2f4c6ba-03b9-41b0-9751-322db69d3096-900x500.jpg",
      "rating": 4.8,
      "cuisine": "Avropa mətbəxi"
    },
    {
      "name": "Cay Bagi 145 Tea Garden",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/a9/79/chaybagi145-baku-azerbaijan.jpg?w=900&h=500&s=1",
      "rating": 4.3,
      "cuisine": "Beynəlxalq mətbəx"
    },
    {
      "name": "Shah Restaurant & Gallery",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0d/b9/86/60/the-shah-restaurant.jpg",
      "rating": 4.7,
      "cuisine": "Azərbaycan mətbəxi"
    },
    {
      "name": "Malacannes 145",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/67/fc/malacannes.jpg?w=900&h=500&s=1",
      "rating": 4.9,
      "cuisine": "Avropa mətbəxi"
    },
    {
      "name": "Art Club Restaurant",
      "imageUrl": "https://artclub.az/storage/23/625d4adbd7e4a_26841399_1811180988913025_5705501823511144783_o.jpg",
      "rating": 4.8,
      "cuisine": "Azərbaycan mətbəxi"
    },
    {
      "name": "Anadolu Restaurant & Catering",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d9/13/54/caption.jpg?w=900&h=500&s=1",
      "rating": 4.7,
      "cuisine": "Türk mətbəxi"
    },
    {
      "name": "Passage 145",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/46/fc/ff/passage145.jpg?w=900&h=500&s=1",
      "rating": 4.8,
      "cuisine": "Avropa mətbəxi"
    },
    {
      "name": "OroNero Bar & Ristorante",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/1d/5d/b4/the-main-hall-of-the.jpg",
      "rating": 4.8,
      "cuisine": "İtalyan mətbəxi"
    },
    {
      "name": "Firuze Restaurant",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/18/65/a0/70/caption.jpg",
      "rating": 4.5,
      "cuisine": "Azərbaycan mətbəxi"
    }
  ]

}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {

  },
})

export const { } = foodSlice.actions

export default foodSlice.reducer