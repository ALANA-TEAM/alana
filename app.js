      const startButton = document.querySelector('#start-button');
      const transcript = document.querySelector('#transcript');

      startButton.addEventListener('click', () => {
        // Check if the browser supports the Web Speech API
        if ('speechRecognition' in window) {
          const recognition = new window.speechRecognition();
          recognition.interimResults = true;
          recognition.continuous = true;
          recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
              let result = event.results[i];
              if (result.isFinal) {
                transcript += result[0].transcript;
              } else {
                transcript += result[0].transcript;
              }
            }
            // Perform actions based on the transcript
            handleTranscript(transcript);
          };
          recognition.start();
        } else {
          console.log("Your browser doesn't support the Web Speech API");
        }
      });

      function handleTranscript(transcript) {
        // Perform calculations
        if (transcript.includes('plus')) {
          const numbers = extractNumbers(transcript);
          if (numbers.length === 2) {
            console.log(`Result: ${numbers[0] + numbers[1]}`);
          }
        } else if (transcript.includes('minus')) {
          const numbers = extractNumbers(transcript);
          if (numbers.length === 2) {
            console.log(`Result: ${numbers[0] - numbers[1]}`);
          }
        } else if (transcript.includes('times')) {
          const numbers = extractNumbers(transcript);
          if (numbers.length === 2) {
            console.log(`Result: ${numbers[0] * numbers[1]}`);
          }
        } else if (transcript.includes('divided by')) {
          const numbers = extractNumbers(transcript);
          if (numbers.length === 2) {
            console.log(`Result: ${numbers[0] / numbers[1]}`);
          }
        }

        // Open websites
        if (transcript.includes('Google')) {
          window.open('https://www.google.com');
        } else if (transcript.includes('Flipkart')) {
          window.open('https://www.flipkart.com');
        } else if (transcript.includes('Amazon')) {
          window.open('https://www.amazon.com');
        } else if (transcript.includes('YouTube')) {
          window.open('https://www.youtube.com');
        } else if (transcript.includes('Stack Overflow')) {
            window.open('https://stackoverflow.com');
        } else if (transcript.includes('internet speed test')) {
          window.open('https://www.speedtest.net');
        } else if (transcript.includes('Gmail')) {
          window.open('https://mail.google.com');
        }

        // Search on websites
        if (transcript.includes('search on Google')) {
          const searchTerm = extractSearchTerm(transcript, 'Google');
          window.open(`https://www.google.com/search?q=${searchTerm}`);
        } else if (transcript.includes('search on Flipkart')) {
          const searchTerm = extractSearchTerm(transcript, 'Flipkart');
          window.open(`https://www.flipkart.com/search?q=${searchTerm}`);
        } else if (transcript.includes('search on Amazon')) {
          const searchTerm = extractSearchTerm(transcript, 'Amazon');
          window.open(`https://www.amazon.com/s?field-keywords=${searchTerm}`);
        } else if (transcript.includes('search on YouTube')) {
          const searchTerm = extractSearchTerm(transcript, 'YouTube');
          window.open(`https://www.youtube.com/results?search_query=${searchTerm}`);
        }

        // Tell jokes, weather, and news
        if (transcript.includes('tell me a joke')) {
          tellJoke();
        } else if (transcript.includes('what is the weather')) {
          getWeather();
        } else if (transcript.includes('what is the news')) {
          getNews();
        }
      }

      function extractNumbers(transcript) {
        const numbers = [];
        const words = transcript.split(' ');
        for (const word of words) {
          if (!isNaN(word)) {
            numbers.push(Number(word));
          }
        }
        return numbers;
      }

      function extractSearchTerm(transcript, website) {
        const index = transcript.indexOf(website);
        if (index !== -1) {
          return transcript.substring(index + website.length + 1);
        }
        return '';
      }

      function tellJoke() {
        // Code to fetch and tell a joke goes here
      }

      function getWeather() {
        // Code to fetch and display the weather goes here
      }

      function getNews() {
        // Code to fetch and display the news goes here
      }

