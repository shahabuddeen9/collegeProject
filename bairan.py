#  def printLyrics():
#     import time

#     lyrics = [
#         "Haa Manne sambh-sambh rakhe tere jhanjhara ke jode",
#         "Meri gail ro-ro ye bhi chhori bawle se hore",
#         "Manne aaye jaave khyaal tere khaye jaave",
#         "Jeene koni deti haaye bairi tanhayi manne",
#         "Geeta mein gayi kade chhaati ke lagayi manne",
#         "Jad bhi gaya re teri yaad khadi payi manne",
#         "Sambh sambh rakhi bahut chhaati ke lagayi manne",
#         "Jad bhi gaya re teri yaad khadi payi manne"
#     ]

#     delays = [0.5, 0.8, 1, 1.2, 1.1, 1, 1, 0.9]

#     for i, line in enumerate(lyrics):
#         print(line)
#         time.sleep(delays[i])


# printLyrics()
def printLyrics():
    import time

    lyrics = [
        "Haa Manne sambh-sambh rakhe tere jhanjhara ke jode",
        "Meri gail ro-ro ye bhi chhori bawle se hore",
        "Manne aaye jaave khyaal tere khaye jaave",
        "Jeene koni deti haaye bairi tanhayi manne",
        "Geeta mein gayi kade chhaati ke lagayi manne",
        "Jad bhi gaya re teri yaad khadi payi manne",
        "Sambh sambh rakhi bahut chhaati ke lagayi manne",
        "Jad bhi gaya re teri yaad khadi payi manne"
    ]

    for line in lyrics:
        words = line.split()
        for word in words:
            print(word, end=" ", flush=True)
            time.sleep(0.3)   # speed of words
        print()
        time.sleep(1)  # gap between lines

printLyrics()
