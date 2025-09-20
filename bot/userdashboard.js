 document.addEventListener('DOMContentLoaded', function() {
            const chatbotButton = document.querySelector('.chatbot-button');
            const chatbotWindow = document.querySelector('.chatbot-window');
            const chatbotClose = document.querySelector('.chatbot-close');
            const chatbotInput = document.querySelector('.chatbot-input input');
            const chatbotSend = document.querySelector('.chatbot-send');
            const chatbotMessages = document.querySelector('.chatbot-messages');
            
            // Toggle chat window
            chatbotButton.addEventListener('click', function() {
                chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
                if (chatbotWindow.style.display === 'flex') {
                    chatbotInput.focus();
                }
            });
            
            // Close chat window
            chatbotClose.addEventListener('click', function() {
                chatbotWindow.style.display = 'none';
            });
            
            // Send message function
            function sendMessage() {
                const message = chatbotInput.value.trim();
                if (message === '') return;
                
                // Add user message
                addMessage(message, 'user');
                chatbotInput.value = '';
                
                // Simulate bot thinking
                setTimeout(() => {
                    const botResponse = generateResponse(message);
                    addMessage(botResponse, 'bot');
                }, 1000);
            }
            
            // Send message on button click
            chatbotSend.addEventListener('click', sendMessage);
            
            // Send message on Enter key
            chatbotInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            // Add message to chat
            function addMessage(text, sender) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                messageElement.classList.add(sender + '-message');
                messageElement.textContent = text;
                
                chatbotMessages.appendChild(messageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
            
            // Smart response generator
            function generateResponse(message) {
                const lowerMsg = message.toLowerCase();
                
                // Greetings
                if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
                    return 'Hello! How can I assist you today?';
                }
                
                // Prescription questions
                if (lowerMsg.includes('prescription') || lowerMsg.includes('refill') || lowerMsg.includes('medicine')) {
                    return 'You can transfer prescriptions through our app or website. Would you like me to send you a link?';
                }
                
                // Delivery questions
                if (lowerMsg.includes('delivery') || lowerMsg.includes('ship') || lowerMsg.includes('arrive')) {
                    return 'We offer free delivery on orders over $35. Most packages arrive within 2-3 business days.';
                }
                
                if (lowerMsg.includes('how are you') || lowerMsg.includes('Hope you are good') || lowerMsg.includes('Your day going')) {
                    return 'I am good and you thanks for asking. How may i be of service to you?';
                }

                if (lowerMsg.includes('not feeling well') || lowerMsg.includes('sick') || lowerMsg.includes('Under the weather')) {
                    return 'Tell me what exactly is going on and i will help you with that?';
                }
                
                if (lowerMsg.includes('headache') || lowerMsg.includes('malaria') || lowerMsg.includes('temperature')) {
                    return 'Oh Sorry! From your symptom you might be suffering from malaria or maybe fever';
                }
                
                // Contact questions
                if (lowerMsg.includes('contact') || lowerMsg.includes('help') || lowerMsg.includes('support')) {
                    return 'You can reach us at +23480000447737 or support@flux-rx.com. Our team is available 24/7!';
                }
                
                // Thank you responses
                if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
                    return "You're welcome! 😊 Is there anything else I can help with?";
                }
                
                // Default response
                return "That's a great question! For detailed assistance, our support team would be happy to help. Would you like me to connect you?";
            }
        });