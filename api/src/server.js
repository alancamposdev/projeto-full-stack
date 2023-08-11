module.exports = server => {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
    console.log(`\n=== http://localhost:${port}/v1 ===\n`);
});
};