#!/usr/bin/env python
"""
python parse_links.py <input_file.html> <output_dir>

Add target="_blank" to external links that are missing it
fix inter-components links
"""

import os.path, re, sys

BASE_PG_URL = 'http://paulgraham.com/'
EXT_TARGET = 'target="_blank"'

LINK_RE = re.compile(r'<a(?: href="(?P<ext>https?://)?(?P<url>.*?)")?(?: name="(?P<name>.*?)")?>', re.M)
# For this particular case, all links are :
# <a href name>, <a href>, <a name>

def parse(html):
	# bugfix in PG's essays
	html = html.replace('hef="', 'href="')
	for m in LINK_RE.finditer(html):
		d = m.groupdict()
		link = m.group()
		if d['url'] is not None:
			if d['url'].startswith('#') and d['name'] is None:
				# Link to a footnote, need to add an anchor
				link = link.replace('<a ', '<a name="{}" '.format(d['url'][1:-1]))
				
			if d['ext'] is None and not d['url'].startswith('#'):
				# link to another PG essay
				link = link.replace(d['url'], '{}{}'.format(BASE_PG_URL, d['url']))
				d['ext'] = True # next if add the target=_blank
			if d['ext'] is not None:
				# Extnernal link
				link = link.replace('<a ', '<a {} '.format(EXT_TARGET))
				
		if d['name'] is not None and d['url'] is None:
			# Footnote, need to add link back to the reference
			link = link.replace('<a ', '<a href="#{}" '.format(d['name'][:-1]))
			
		if link != m.group():
			html = html.replace(m.group(), link)
			
	return html


def main():
	if len(sys.argv) != 3:
		sys.stderr.write('Need exactly two arguments (input file and output directory)\n')
		sys.exit(1)
	with open(sys.argv[1], 'r') as f:
		html = ''.join(f.readlines())
	
	html = parse(html)
	
	with open(os.path.join(sys.argv[2], os.path.basename(sys.argv[1])), 'w') as f:
		f.write(html)


if __name__ == '__main__':
	main()
