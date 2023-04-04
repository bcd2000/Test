const parents = [
    {
      name: 'Node 1',
      descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      childs: [
        {
          name: 'Node 1.1',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.1.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.1.3.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.5',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.1.4',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.2',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.3',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.4',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.4.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.4.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.4.2.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                  childs: [
                    {
                      name: 'Node 1.4.2.3.1',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                    {
                      name: 'Node 1.4.2.3.2',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                  ],
                },
                {
                  name: 'Node 1.4.2.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.4.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.5',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
      ],
    },
];

const genarateDomTree = (parents) => {
    const divEl = document.createElement("div");
    let count = 0
    for (let i = 0; i < parents.length; i++) {
      const {childs} = parents[i];
      if(childs) {
          count++;
          genarateDomTree(childs);
      }
      genarateDom(divEl, parents[i].name)
    }
}

const genarateDom = (divEl, name) => {
  const divChild = document.createElement("div");
  const pEl = document.createElement("p");
  const spanEl = document.createElement("span");
  spanEl.innerText = name;
  pEl.appendChild(spanEl);
  divChild.appendChild(pEl)
  divEl.appendChild(divChild);
  document.body.appendChild(divEl);
}

genarateDomTree(parents)

