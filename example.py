from Stemming import Stemming

str = "berpuasa adalah kewajiban bagi setiap umat islam di dunia dan bermanfaat untuk akhirat"
# str = input("Masukkan Kalimat: ")
# print(str)

s = Stemming()
res = s.stem(str)
print(res)
