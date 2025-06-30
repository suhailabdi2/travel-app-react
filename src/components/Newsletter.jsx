export default function Newsletter(){
    return(
        <div class="newsletter-section">
            <h2 class="newsletter-title">
                Subscribe to get information, latest news and other<br/><br/>
                interesting offers about travel
            </h2>
            <form class="newsletter-form">
                <div class="newsletter-input-group">
                    <span class="newsletter-icon">✉️</span>
                    <input type="email" placeholder="Your email" required/>
                </div>
                <button type="submit" class="newsletter-btn">Subscribe</button>
            </form>
        </div>
    )
}