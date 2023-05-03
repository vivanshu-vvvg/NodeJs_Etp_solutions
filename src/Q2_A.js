//02_A)Demonstrate the concept of compression and decompression using zlib module.


const zlib = require('zlib');

const input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Compress the input data using gzip
zlib.gzip(input, (err, compressed) => {
  if (err) {
    console.error('Compression error:', err);
    return;
  }
  console.log('Compressed data:', compressed);

  // Decompress the compressed data using gunzip
  zlib.gunzip(compressed, (err, decompressed) => {
    if (err) {
      console.error('Decompression error:', err);
      return;
    }
    console.log('Decompressed data:', decompressed.toString());
  });
});


/*
In this example, we first create a string input that we want to compress. We then use the zlib.gzip() method to compress the input data using the gzip algorithm. The gzip() method takes two arguments: the input data to compress, and a callback function that is called with the compressed data as the second argument.

If an error occurs during compression, the callback function is called with an error object as the first argument. If compression succeeds, the callback function is called with the compressed data as the second argument.

We then use the zlib.gunzip() method to decompress the compressed data using the gunzip algorithm. The gunzip() method takes two arguments: the compressed data to decompress, and a callback function that is called with the decompressed data as the second argument.

If an error occurs during decompression, the callback function is called with an error object as the first argument. If decompression succeeds, the callback function is called with the decompressed data as the second argument.

Finally, we log the compressed and decompressed data to the console.
*/