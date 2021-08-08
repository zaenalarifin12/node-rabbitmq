# EXCHANGE TYPE & USE CASES 
                                                         |-> Q1 |
PRODUCER/PUBLISHER -> routing key -> EXCHANGE -> binding |-> Q2 | -> consumer
                                                         |-> Q3 | 

# fanout exchange

producer -> fanout -> q123


# All in All


[ ] Broadcast = fanout
[ ] Simple Scenarios = Direct
[ ] Complex broadcast = Topic
[ ] Special filtering = Headers 