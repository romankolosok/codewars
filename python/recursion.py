def max_pizza(cuts):
    print(cuts)
    if cuts < 0:
        return -1
    if cuts == 0: return 1
    return cuts + max_pizza(cuts-1)

num = int(input("Enter number: "))

print(max_pizza(num))

