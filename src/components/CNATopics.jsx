import React, {useState} from 'react'
import image1 from "../assets/topic1Image.jpg"
import image2 from "../assets/topic2Image.jpg"
import image3 from "../assets/topic3Image.jpg"
import image4 from "../assets/topic4Image.jpg"
import image5 from "../assets/topic5Image.jpg"
import image6 from "../assets/topic6Image.jpg"
import image7 from "../assets/topic7Image.jpg"
import image8 from "../assets/topic8Image.jpg"

const CNATopics = () => {
  const topicArticles = {
    topic1: `<div>
            <article id="topic1">
                <div>
                    <div>
                        <div class="text-center">
                          <a class="font-bold" href="#navigationBar">HOME</a>
                        </div>
                        <h1 class="text-center font-bold">
                            Cross Gesture
                        </h1>
                        <h3 class="text-center">
                            By Cleb B. Calimutan
                        </h3>
                    </div>
                    <br>
                    <div>
                        <div
                            style="background-image:url(./images/download.jpg);">
                        </div>
                    </div>
                    <br>
                </div>
                <div>
                    <p>Man is composed of both body and soul and his entire being is called for to worship God-not only
                        the
                        soul but as well as the body. Now, since the thought is communicated through bodily expression;
                        the
                        same principle of communication springs out upon communicating God in a form of prayer and
                        worship
                        can be applied, not discounting meditation. From this point of truth, we see a lot of Biblical
                        prayer gestures like frustrating, kneeling, raising of hands and many others.
                    </p>
                    <br>
                    <p>
                        Now a unique gesture of prayer and praising God was formed among the early Christians: the
                        signing
                        of the Cross. The Cross was used at the time as a monogram of the Greek word <em>chrīstós</em>
                        (Christ);
                        that’s why there nobody can plausibly question, why the cross is a perfect symbol of Christ. And
                        so
                        inferentially if a person desired to be clothe in the name of Christ he can expressly mark a
                        cross
                        on his body; however not necessarily in a form of a tattoo but by tracing it on his body-now
                        known
                        as the signing of the cross.
                    </p>
                    <br>
                    <p>
                        This practice is no way strange to the Bible. In the book of Ezekiel in Old Testament we read in
                        Chapter 9 that God instructed his angel to trace a mark the foreheads of the people who will be
                        spared from death. And the term used in the Hebrew Bible is the word TAU which is in accordance
                        to
                        Hebraic alphabetical symbol of letters a cross: <em>Tau</em> is a Cross. This is the reason why
                        St. Cyril
                        in
                        his writing wrote that the early Christians were inspired to trace a cross on their forehead,
                        because they were inspired by the writings of the prophet. The signing of the cross therefore is
                        a
                        sign not deserving of any mockery but of respect; since Christ died on the cross because of his
                        love
                        to all to people and it’s not proper to mock a person loving you.
                    </p>
                </div>
            </article>
        </div>`,
    topic2: `<div>
            <article>
                <div>
                    <div class="text-center">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center font-bold">
                        God is not a Folkore
                    </h2>
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>Atheists are ridiculing Christianity by throwing the lines that the idea of God is the same on
                        how folklore stories were formed and transmitted from generation to generation. They even
                        asserted that God is the same as the folkloric stories of Sta. Claus visiting from one house to
                        another to distribute gifts by putting them inside a huge sack.
                    </p>
                    <br>
                    <p>
                        On the contrary, the Christian God is not the same as a folkloric invention. There might be
                        folkloric stories among gods and goddesses or as observed from those who are worshipping idols.
                        There might be a lot of misconception about the divine being from one pagan culture to another.
                        Primitive people might have sa cultic practices and created stories which are passed to the next
                        generation; stories that are fictional or some kind of urban legend but not true.
                    </p>
                    <br>
                    <p>
                        However, the idea of a supreme being - a God who created everything we see or to all that man
                        has known since he got his consciousness, cannot be a folklore. The strong ground is that a
                        supreme being can be reached by an ordinary human mind with the use of reason which principle is
                        universal and self-evident.
                    </p>
                    <br>
                    <p>
                        This was explained by St. Thomas Aquinas in his Fiveways of knowing God. Like when he said that
                        everything has a cause, as observed nobody can point out anything in the universe which is not
                        caused. Even the entire universe is caused, say for example the formation of the universe is a
                        result of a big bang. Now, all things are caused, and that cause is further caused by another.
                        But the series of causes cannot proceed to infinity since if there is a series of infinite
                        causes then there is no starting point of all the causes which lead to the denial of existence.
                        Hence, if there is no starting point or a first cause then there would be no series of effect
                        and if there is no series of effect then nothing would exist, but we see and observe that you
                        and me, and others are existing. Therefore, the first cause which is not cause by something else
                        must exist and that’s what we called God the Supreme being.
                    </p>
                    <p>
                        Folkloric stories are not founded on reason unlike the idea of a supreme being which is known
                        trough valid reasonings. The Bible maintains as expressed by the Psalmist, “A fool says in his
                        heart, there is no God.”
                    </p>
                </div>
            </article>
        </div>`,
    topic3:`<div>
            <article>
                <div>
                    <div class="text-center">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center font-bold">
                        Why Catholic Images are Sacred
                    </h2>
                    <h3 class="text-center font-bold">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>There are videos mocking or crushing Catholic images like of Jesus, Mary, and the Saints. Those
                        actions are offensive among Catholics. At some point, some believers are silently in deep pain
                        while others seek legal action to address this act of religious hate.
                    </p>
                    <br>
                    <p>
                        The issue on sacred images is not a small thing as many of the faithful abandoned the Church
                        thinking that Catholics are practicing idolatry.
                    </p>
                    <br>
                    <p>
                        It’s outstanding to note that in Latin the word sacred is “sacrare” to set apart, to consecrate.
                        In Greek the term is “hagios” which means holiness. St. Thomas Aquinas explained that it refers
                        either to persons or things which are dedicated or offered to God, that’s why things of these
                        kind are separated from the ordinary and considered strongly-religiously valued.
                    </p>
                    <p>
                        Biblically, there are lot of images and things dedicated to God, examples the Ark of the
                        Covenant, Cherubs, palm trees, images of man’s face and lions etc. More firmly, the New
                        Testament used the word δῶρον (doron), in which a thing, in the wider sense, becomes sacred when
                        offered in the temple, and when images are dedicated with that same purpose - they become
                        sacred. As long as the images are strictly expressions of the faith, they are acknowledged by
                        the Church and allowed to be placed inside the place of worship, for these things pertain to
                        God. The Blessing of water to these images implies that they are not intended for profane usage
                        but for divine intentions-creating a clear differentiation and separation from other mundane
                        illustrations.
                    </p>
                    <p>
                        Idolatrous images are forbidden and shall be destroyed since they are dedicated to false gods.
                        However, to mock or destroy sacred images is now a clear sacrilege since they are dedicated to
                        the real God.
                    </p>
                    <p>
                        The Lord is so determined with this, for due to his irreverence Uzzah was put to death when he
                        touched the holy ark of the covenant (with two Cherubs). In God, whatever is sacred is sacred
                        and not the other way.
                    </p>
                </div>
            </article>
        </div>`,
    topic4:`<div>
            <article>
                <div>
                    <div class="text-center">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center font-bold">
                        Assumption of Mary: In the light of the Scriptures
                    </h2>
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>The highest rank of a definitive doctrine is when it is formally declared a dogma whereby the
                        teaching is held to be free from error and at the level of moral certitude. This is how the
                        bodily assumption of Mary is regarded by the Catholic Magisterium. Pope Pius XII declared, "We
                        proclaim and define it to be a dogma revealed by God that the immaculate Mother of God, Mary
                        ever virgin, when the course of her earthly life was finished, was taken up body and soul into
                        the glory of heaven."
                    </p>
                    <br>
                    <p>
                        The extraction of the doctrine from the Scripture deserves more attention to all devotees and
                        religious thinkers. Mariologists use the approach of the Biblical Study known as typology which
                        means the events, persons or statements in the Old Testament are seen prefiguring. The events or
                        aspects of Christ or his revelation described in the New Testament elucidates to this doctrine
                        from Scripture. St. Paul even uses this approach when he quoted a lot of Old Testament passages
                        foreshadowing and explaining its fulfilment steering to Christ.
                    </p>
                    <br>
                    <p>
                        Under the lens of typology when we look at this passage: Rise up, O Lord, and go to your resting
                        place, you and the ark of your might (Ps.132:8 NRSVCE), at first, the pericope is fundamentally
                        simple but when you start to press on how it foretells something in the New Testament. It
                        uncovers a new truth. The “Lord who rises up” definitely points to Christ and no disagreement so
                        far within the Christian world. But the passage mentions not only the Lord but with his “Ark.”
                        The image of the book of Exodus provides that the Word of God (Decalogue) is placed inside the
                        Ark. Now, Jesus is the Word of God and no ark can be attributed to Jesus but Mary his mother.
                        And so therefore, the line to “rise up” which points to resurrection-and bodily ascension of
                        Jesus leads to another truth on the bodily assumption Mary into heaven the Ark of Christ.
                    </p>
                    <br>
                    <p>
                        Another outstanding passage in the scripture is in Genesis 3:15 (NRSVCE), “I will put enmity
                        between you and the woman, and between your offspring and hers; he will strike your head, and
                        you will strike his heel.” The seed that crushes the devil and puts him under his feet is Jesus
                        who is the second Adam as we note from the lines of St. Paul. And with that, since the passage
                        mentions the woman and her seed, the woman with Jesus is no other than Mary. There is no doubt
                        that Jesus is the second Adam and Mary is the second Eve with a mother and son relationship.
                        Check it out, the immediate effect of the sin was the first Adam and Eve were taken out from
                        paradise a prototype of heaven.
                    </p>
                    <p>
                        Therefore, the crushing of the devil determines the triumph and taking back what was taken from
                        the first Adam and Eve. As a result, both the Woman and the seed must enter back into paradise
                        with a new reality. It is a paradise-the throne of God which when the new Adam and Eve: Jesus
                        ascended into heaven and Mary’s taking up into heaven with their bodies and souls, the new Adam
                        and Eve.
                    </p>
                </div>
            </article>
        </div>`,
    topic5:`<div>
            <article>
                <div>
                    <div class="text-center">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center">
                        The Significance of Mary’s Birth
                    </h2 class="text-center">
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>The Protoevangelium of James, specifically in verse 5:2, offers insight into the birth of Mary,
                        the mother of Jesus. Joachim and Anne, a couple who had been experiencing the sorrow of
                        childlessness for a significant period, turned to heartfelt prayer. In response to their
                        lamentation, an angel appeared to Anne and Joachim, delivering the news of the forthcoming birth
                        of a baby girl. This angelic message conveyed that her name would become renowned throughout the
                        world.
                    </p>
                    <br>
                    <p>
                        According to the Diocese of Angers in France, a legendary account tells the story of St.
                        Maurilius, where it is said that angels were heard singing on this particular day in honor of
                        the birth of the Blessed Virgin Mary. However, the liturgical reason for celebrating the
                        Nativity on the 8th of September is rooted in the commemoration of the Basilica of the Church of
                        St. Anne in Jerusalem, which has a historical connection to the birth of the Mother of God.
                    </p>
                    <br>
                    <p>
                        Mary's conception and birth were special as she was free from original sin, which is why the
                        Church celebrates her birthday. She is seen as the ideal mother, as desired by Jesus Himself. He
                        created His own mother, and it's no surprise that He would create a woman filled with love,
                        purity, and grace.
                    </p>
                    <br>
                    <p>
                        However, it's important to remember that the same God who created Mary also created your own
                        personal mother. While she may not be perfect, your mother is an expression of God's love, and
                        you only have one mother in your life who is truly worth cherishing. Additionally, Mary is also
                        considered our Mother in heaven, whose love is unwavering and who never abandons those who seek
                        her help.
                    </p>
                    <p>
                        The celebration of Mary's birthday serves as a reminder that, like her, we are all created with
                        a purpose in relation to the redemptive actions of Jesus. Each of us is created with a unique
                        purpose that unfolds every day. Just as Mary had faith and offered herself entirely, we too are
                        called to have faith and dedicate ourselves and everything we have to make our lives not just
                        our own story, but a story written by the Lord Jesus Christ.
                    </p>
                </div>
            </article>
        </div>`,
    topic6:`<div>
            <article>
                <div>
                    <div class="text-center">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center">
                        The Novus Ordo Missae Reintroduces Ancient Traditions
                    </h2>
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>The Novus Ordo Missae, commonly known as the New Order of the Mass, is the form of Mass currently
                        attended during daily and Sunday services. It represents the ordinary way in which Mass is
                        celebrated. In this form, prayers and songs are recited in the vernacular language, a practice
                        permitted by Popes since 1906. Additionally, the priest and the congregation face the
                        altar-table of sacrifice, and there is involvement of extraordinary ministers in the
                        distribution of Holy Communion.
                    </p>
                    <br>
                    <p>
                        The beauty of the Novus Ordo Missae is sometimes overlooked by certain Catholics, leading to
                        differing interpretations. It's important to note that the Novus Ordo retains the fundamental
                        structure of the Traditional Latin Mass, streamlining language and removing certain repetitions.
                        Father Edward Horkan emphasized four purposes of the ordinary form: (1) promoting a noble
                        simplicity, (2) incorporating a broader range of scriptural readings, (3) placing greater
                        emphasis on homilies and instruction, and (4) increasing the use of vernacular languages while
                        preserving Latin.
                    </p>
                    <br>
                    <p>
                        According to Father Chris Alaer, the ordinary form predates the Traditional Latin Mass or
                        Tridentine Mass. It reintroduces the practice of delivering homilies on Sundays and Feast days,
                        incorporates prayers of the faithful that had been absent for a long time, organizes readings
                        into three cycles spanning three years, and notably allows the communion of both consecrated
                        bread and wine.
                    </p>
                    <p>
                        It's essential to distinguish that actions such as clown Masses or non-Catholic participation in
                        prayer during Mass are not aligned with the Novus Ordo text. These actions constitute abuses and
                        are not part of the New Missale Romanum or any Vatican II document.
                    </p>
                </div>
            </article>
        </div>`,
    topic7:`<div>
            <article>
                <div>
                    <div class="text-center font-bold">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center font-bold">
                        WHY PRAY THE ROSARY?
                    </h2>
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <p>The celestial beings known as Seraphim continuously exalt and revere God, uttering praises of
                        "Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come." This scenario,
                        documented in the Bible, portrays the act of glorifying and honoring God during encounters with
                        the divine. These spiritual entities, being close to God in heaven, are granted this profound
                        opportunity.
                    </p>
                    <br>
                    <p>
                        God, desiring humans to be in close communion with Him for the purpose of glorification and
                        honor, took on human form in Jesus. He became the visible representation of the unseen God,
                        allowing those who see Him to perceive the Father. Furthermore, to draw us even closer, God
                        created Mary, full of grace, who is intimately connected to Jesus. The relationship of
                        motherhood and sonship is the closest bond among humanity. Mary, as a human being, is accessible
                        to us, initiating personal relationships. Yet, Mary holds a unique closeness to God due to her
                        being full of grace.
                    </p>
                    <br>
                    <p>
                        From this perspective, we can conclude that to draw near to Jesus, we should approach Mary. By
                        our very nature, we are already close to her, and by grace, she is close to God. This elucidates
                        why, while on the cross, Jesus entrusted John with the words, "Behold your Mother," extending
                        this message to all believers. As we strive to be close to God and honor Him, it becomes a
                        prerequisite to honor Mary. For in beholding her, we glimpse God, as she embodies a perfect
                        image of God through her abundant grace. The honor we bestow upon Mary is of a lesser degree,
                        acknowledging her humanity, yet akin to the repetitive honor the Seraphs bestow upon God in
                        heaven. Seraphs honor God directly in heaven, suited to their proximity to God. Similarly, it is
                        fitting for humans to honor God by honoring Mary, a divine creation reflecting God's glory.
                    </p>
                    <br>
                    <p>
                        In Israel, requests made to the King were traditionally presented through the intercession of
                        the Gebirah (Queen Mother). Before presenting a petition, an act of shalom honoring was
                        observed.
                    </p>
                    <br>
                    <p>
                        Interestingly, the Hail Mary in Hebrew is "Shalom Lac Meriam," echoing the same shalom custom
                        when approaching a Gebirah before making a request in ancient times. Notably, the "Hail Mary..."
                        is consistently followed by "Holy Mary, pray for us." By honoring Mary, we are directed to
                        Jesus. The Rosary provides a way for the faithful to meditate on the lives of Jesus and Mary,
                        essentially offering a condensed narrative of the New Testament.
                    </p>
                </div>
            </article>
        </div>`,
    topic8:`<div>
            <article>
                <div>
                    <div class="text-center font-bold">
                      <a class="font-bold" href="#navigationBar">HOME</a>
                    </div>
                    <h2 class="text-center font-bold">
                        The 15 Promises of the Virgin Mary, Queen of the Rosary
                    </h2>
                    <h3 class="text-center">
                        By Cleb B. Calimutan
                    </h3>
                </div>
                <br>
                <div>
                    <div>
                    </div>
                </div>
                <br>
                <div>
                    <ol>
                        <li>Whoever shall faithfully serve me by the recitation of the Rosary, shall receive powerful
                            graces.
                        </li>
                        <br>
                        <li>
                            I promise my special protection and the greatest graces to all those who shall recite the
                            Rosary.
                        </li>
                        <br>
                        <li>
                            The Rosary shall be a powerful armor against hell; it will destroy vice, decrease sin, and
                            defeat heresies.
                        </li>
                        <br>
                        <li>
                            It will cause virtue and good works to flourish; it will obtain for souls the abundant mercy
                            of God; it will withdraw the hearts of people from the love of the world and its vanities
                            and will lift them to the desire of eternal things. Oh, that souls would sanctify themselves
                            by this means.
                        </li>
                        <br>
                        <li>
                            The soul, which recommends itself to me by the recitation of the Rosary, shall not perish.
                        </li>
                        <br>
                        <li>
                            Whoever shall recite the Rosary devoutly, applying himself to the consideration of its
                            Sacred Mysteries shall never be conquered by misfortune. God will not chastise him in His
                            justice, he shall not perish by an unprovided death; if he be just, he shall remain in the
                            grace of God, and become worthy of eternal life.
                        </li>
                        <br>
                        <li>
                            Whoever shall have a true devotion for the Rosary shall not die without the Sacraments of
                            the Church.
                        </li>
                        <br>
                        <li>
                            Those who are faithful to recite the Rosary shall have during their life and at their death
                            the light of God and the plentitude of His graces; at the moment of death they shall
                            participate in the merits of the Saints in Paradise.
                        </li>
                        <br>
                        <li>
                            I shall deliver from purgatory those who have been devoted to the Rosary.
                        </li>
                        <br>
                        <li>
                            The faithful children of the Rosary shall merit a high degree of glory in Heaven.
                        </li>
                        <br>
                        <li>
                            You shall obtain all you ask of me by the recitation of the Rosary.
                        </li>
                        <br>
                        <li>
                            All those who propagate the Holy Rosary shall be aided by me in their necessities.
                        </li>
                        <br>
                        <li>
                            I have obtained from my Divine Son that all the advocates of the Rosary shall have for
                            intercessors the entire celestial court during their life and at the hour of death.
                        </li>
                        <br>
                        <li>
                            All who recite the Rosary are my children, and brothers and sisters of my only Son, Jesus
                            Christ.
                        </li>
                        <br>
                        <li>
                            Devotion of my Rosary is a great sign of predestination.
                        </li>
                    </ol>
                </div>
            </article>
        </div>`
  }

  const [topicNumber, setTopicNumber] = useState()

  const handleClick = (event) => {  
    setTopicNumber(event.currentTarget.value)
  }

  return (
    <div>
        <div className="flex relative top-0.5">
            <div id="announcements" className="h-fit bg-red-900 w-1/4 flex justify-center flex-wrap items-start font-sans text-xl text-white border-current border-8">
                <p id="topics" className="h-10 pr-24 pl-24">Topics</p>
                <button value="topic1" onClick={handleClick}>
                  <img src={image1} alt="This is the smaller picture of topic 1." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic2" onClick={handleClick}>
                  <img src={image2} alt="This is the smaller picture of topic 2." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic3" onClick={handleClick}>
                  <img src={image3} alt="This is the smaller picture of topic 3." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic4" onClick={handleClick}>
                  <img src={image4} alt="This is the smaller picture of topic 4." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic5" onClick={handleClick}>
                  <img src={image5} alt="This is the smaller picture of topic 5." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic6" onClick={handleClick}>
                  <img src={image6} alt="This is the smaller picture of topic 6." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic7" onClick={handleClick}>
                  <img src={image7} alt="This is the smaller picture of topic 7." className="h-56 w-56 border-red-900 border-4" />
                </button>
                <button value="topic8" onClick={handleClick}>
                  <img src={image8} alt="This is the smaller picture of topic 8." className="h-56 w-56 border-red-900 border-4" />
                </button>
            </div>
            <div className="w-3/4 border-8 border-white flex justify-center items-center" dangerouslySetInnerHTML={{ __html: topicArticles[topicNumber] }}>
            </div>
        </div>
    </div>
  )
}

export default CNATopics