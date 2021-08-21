# &#128204; scalar-webpage
SCALAR LAB. webpage development  

- Link: https://huiji0315.github.io/scalar-webpage/

## &#128221; How to edit the content of this webpage 

- Gatsby에서는 GraphQL 쿼리를 통해서 홈페이지의 메타데이터, 마크다운 관련 데이터, 이미지 데이터 등을 가져와 사용할 수 있습니다.
- 따라서 이 웹페이지 내용을 구성하고 있는 대부분의 데이터는 **src/content 폴더** 안에서 자동으로 가져오기 때문에  
대부분의 내용 수정은 해당 폴더 안의 데이터들을 수정해주시면 됩니다.  
- 전체 페이지는 **index(home), about, members, publications, 404 페이지**로 구성되어있습니다.  

---

### &#127968; 1. Home(메인페이지)   
#### [src/templates/index.tsx]  

크게 **SiteNav, SiteHeaderContent, Introduction, Field, Footer 구조**로 이루어져 있습니다.

   1) **Introduction**  
      - src/content 폴더 안의 ```introduction.md 파일```에서 ```title, excerpt, image```를 수정하시면 됩니다.  
      -> image의 경우 src/content/img 폴더에 넣어두고 경로는 ```img/파일명``` 형식으로 작성하시면 됩니다.  
      
   2) **Field(Research Topics)**  
      - src/content 폴더 안에 있는 파일들 중 파일명에 ```Field_가 붙은 md 파일```들이 각 항목에 해당됩니다.  
     위와 마찬가지로 ```title, excerpt, image```를 같은 방식으로 수정하시면 됩니다.
     
---

###	&#128313; 2. About(서브페이지)  
#### [src/pages/about.tsx]  

크게 **SiteNav, PostFullHeader, PostFullContent, Footer 구조**로 이루어져 있습니다.  
이 페이지는 query로 가져오지 않고 모두 html 태그를 이용해서 직접 입력하는 방식으로 구현되어 있습니다.

   1) **각 h2 태그**  
      - about 페이지의 부제목들(Introduction, Primary Research Topic, Contact)에 해당합니다. 
      
   2) **각 p 태그**  
      - Introduction 부제목 아래에 존재하는 실제 내용에 해당합니다.  
    
   3) **각 ol 태그 안의 li 태그**  
      - Primary Research Topic 내용에서 번호를 붙여 topic들을 나타내는 것에 해당합니다.  
 
   4) **각 ol 태그 안의 ul > li 태그**  
      - 위의 topic들 아래에 나타나는 description들을 bullet point로 나타내는 것에 해당합니다.  
    
   5) **각 ul 태그 안의 li 태그**  
      - Contact 정보에 해당하는 description들을 bullet point로 나타내는 것에 해당합니다.  
      
---

###	&#128313; 3. Members(서브페이지)  
#### [src/pages/members.tsx]  

크게 **SiteNav, PostFullHeader, PostFullContent, Profile, FormerMembers, Footer 구조**로 이루어져 있습니다.  
이 페이지는 Profile 컴포넌트를 위한 데이터는 query로 가져오고,  
FormerMembers 부분은 html 태그를 이용해서 직접 입력하는 방식으로 구현되어 있습니다.

   1) **각 h2 태그**  
      - members 페이지의 부제목들(Professor, Students)에 해당합니다. 
      
   2) **각 h4 태그**  
      - Students 항목의 소제목들(Master, Undergraduate, Former Members)에 해당합니다.  
      - Ph.D.에 해당하는 부분은 우선 주석처리해두었습니다.
    
   3) **Profile**  
      - src/content/members 폴더 안에 ```각 member에 해당하는 md 파일```과 image 파일이 있습니다.  
      - 각 member에 해당하는 md 파일에서는 ```name, course(undergraduate, Master, Ph.D., ...), email, field(관심분야), image```를  
      수정하시면 됩니다.  
      - course에 해당하는 값은 members 페이지에서 Profile 컴포넌트를 보시면 course = "" 이런 식으로 작성을 해두었는데,  
        이 부분에 작성되어있는 철자와 동일하게 작성되어야 정상적으로 해당 course에 맞게 member들이 분리되는 등의 동작을 한다는 점을 주의하셔야 합니다.  
      - image의 경우에는 동일한 경로인 src/content/members 폴더에 넣어두고 경로는 ```./파일명``` 형식으로 작성하시면 됩니다.  
      (기본으로는 ```./blank-profile.jpg```으로 추가해두었습니다.)  
      - 추가로 member를 입력하기 위해서는 간단하게 해당 폴더에 ```md파일을 생성```하시고, 마찬가지로 ```name, course, email, field, image```를 올바른 값으로 입력하시면 자동으로 추가가 됩니다.
 
   4) **FormerMembers**  
      - html li 태그를 활용하여 간단하게 이전 멤버들을 직접 작성할 수 있도록 하는 부분에 해당합니다.      
      
---

###	&#128313; 4. Publications(서브페이지)  
#### [src/pages/publications.tsx]  

크게 **SiteNav, PostFullHeader, PostFullContent, Subtitle, PublicationList, Footer 구조**로 이루어져 있습니다.  
이 페이지는 PublicationList 컴포넌트를 위한 데이터를 query로 가져오도록 구현되어 있습니다.

   1) **각 h2 태그**  
      - publications 페이지의 부제목들(Journal, Conference)에 해당합니다. 
      
   2) **각 h4 태그**  
      - 각 부제목의 소제목들(International Journal, Domestic Journal, International Conference, Domestic Conference)에 해당합니다.  

   3) **Subtitle**  
      - 각 소제목들을 연도별로 구분하기 위한 부분에 해당합니다.  
      - 현재는 Subtitle에 2021에 해당하는 것만 작성해두었기 때문에, 필요시 다른 부분과 같이 ```Subtitle, PublicationList를 한 세트```로  
      끼워넣어 사용하시면 됩니다.  
          
   3) **PublicationsList**  
      - 위의 members 페이지의 Profile 컴포넌트와 같은 방식으로 구현되어 있습니다.
      - src/content/publications 폴더 안에 ```각 publication에 해당하는 md 파일```이 있습니다.  
      - 각 publication에 해당하는 md 파일에서는 ```publication(International Journal, Domestic Journal, International Conference, Domestic Conference, ...), title, author, year(게재년도), date(게재일), institution(게재기관), url(참고링크)```을  
      수정하시면 됩니다.  
      - publication에 해당하는 값은 publications 페이지에서 PublicationList 컴포넌트를 보시면 publication = "" 이런 식으로 작성을 해두었는데, 이 부분에 작성되어있는 철자와 동일하게 작성되어야 정상적으로 해당 publication에 맞게 journal, conference들이 분리되는 등의 동작을 한다는 점을 주의하셔야 합니다.  
      - PublicationList에서는 year도 추가로 전달해주고 있는데, 같은 방식으로 해당 year에 맞게 journal, conference들이 분리되는 등의 동작을 하는 것입니다.  
      - 추가로 publication을 입력하기 위해서는 간단하게 해당 폴더에 ```md파일을 생성```하시고, 마찬가지로 ```publicaiton, title, author, year, date, institution, url```을 올바른 값으로 입력하시면 자동으로 추가가 됩니다.
      
---

### &#128313; 5. 404(에러페이지)  
#### [src/pages/404.tsx]  

크게 **SiteNav, ErrorCode/Description/Link, Field, Footer 구조**로 이루어져 있습니다.  
이 페이지는 index 페이지에서 사용한 Field 컴포넌트를 그대로 가져와 보여주기 때문에 따로 수정할 필요는 없습니다.  

---

### &#128278; 6. website-config.ts 파일  
- Header에서 SCALAR LAB과 SCALable ARchitecture Lab.을 보여주는 부분의 내용을 수정하고 싶으시다면  
이 파일에서 ```title과 description``` 내용을 수정하시면 됩니다.  
- Header에서 검정색 배경을 다른 사진으로 변경하고 싶으시다면 src/content/img 폴더에 사진을 추가하시고  
```coverImage```에 해당하는 파일명을 변경하시면 됩니다.(logo도 마찬가지)  
- Footer에서 Contact 부분에 들어가는 내용을 수정하고 싶으시다면 이 파일에서 ```contact와 email``` 내용을 수정하시면 됩니다.   
