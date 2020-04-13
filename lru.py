class lru:
    def __init__(self, capacity):
        self.capacity=capacity
        self. count = 0
        self.cache={}
        self.lr={}
    