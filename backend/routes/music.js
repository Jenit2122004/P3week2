const express = require('express');
const router = express.Router();

// Mock data for demonstration
const musicData = [
    { id: 1, title: "Song A", artist: "Artist A", album: "Album A", year: 2020 },
    { id: 2, title: "Song B", artist: "Artist B", album: "Album B", year: 2021 },
    { id: 3, title: "Song C", artist: "Artist C", album: "Album C", year: 2019 },
];

// Fetch music data
router.get('/search', (req, res) => {
    const { query } = req.query;
    const results = musicData.filter(
        (song) =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase()) ||
            song.album.toLowerCase().includes(query.toLowerCase())
    );
    res.json(results);
});

module.exports = router;
